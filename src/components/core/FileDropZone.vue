<template>
  <div>
    <!-- Drop box -->
    <div
      ref="dropzone"
      class="dropzone"
      @dragover.prevent
      @dragleave="dragleave"
      @dragenter="dragenter"
      @drop="drop"
    >
      <!-- Box Label -->
      <slot v-if="!disableLabel"
        ><h1>{{ label || "Upload Box" }}</h1></slot
      >
      <!-- Upload Button -->
      <v-btn
        large
        class="primary dropzone-btn elevation-0"
        @click="$refs.filebtn.click()"
      >
        Upload a File
      </v-btn>
      <!-- Indicate files can be dropped in here -->
      <p v-if="!disableHint">
        <v-icon>mdi-file-multiple</v-icon>
        or drag and drop a file here
      </p>

      <!-- Hidden upload button to bring up file selection dialog -->
      <input
        ref="filebtn"
        class="filebtn"
        type="file"
        multiple
        :accept="
          validatedAccept &&
          [...validatedAccept.extensions, ...validatedAccept.mimetypes].join(
            ','
          )
        "
        @input="upload"
      />
    </div>
    <!-- Indicate selected files -->
    <div class="input-container">
      <v-alert
        v-for="file in files"
        :key="file.name"
        :value="true"
        :color="alertColor(file)"
        :type="alertType(file)"
        dismissible
        :text="!isFileInvalid(file)"
        @input="remove(file)"
      >
        <div class="d-flex justify-space-between">
          <div>
            {{ file.name }}
          </div>
          <div>
            {{ formatBytes(file.size) }}
          </div>
        </div>
      </v-alert>
    </div>
    <span class="text-caption"
      >* Maximum file size is 5Mb. All uploaded documents will be converted to
      pdf for security reasons and your protection.</span
    >
  </div>
</template>

<script>
import { formatBytes } from "~/helpers/files";

export default {
  props: {
    label: {
      type: String,
      required: false,
      default: "Upload Box",
    },
    files: {
      type: Array,
      required: true,
    },
    accept: {
      type: String,
      required: false,
    },
    multiple: {
      type: Boolean,
      required: false,
    },
    disableLabel: {
      type: Boolean,
      required: false,
    },
    disableHint: {
      type: Boolean,
      required: false,
    },
    invalidFiles: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  data() {
    return {
      hoverCounter: 0,
      hoveringContent: null,
      matchAnything: /.*/,
    };
  },
  computed: {
    filebtn: {
      cache: false,
      get() {
        return this.$refs.filebtn;
      },
    },
    dropzone: {
      cache: false,
      get() {
        return this.$refs.dropzone;
      },
    },
    validTypes() {
      if (this.validatedAccept) {
        return {
          extensions: this.validatedAccept.extensions
            .map((ext) => ext.replace(/(\W)/g, "\\$1")) // Escape all potential regex tokens
            .map((rgxstr) => new RegExp(`${rgxstr}$`, "i")), // Transform into regex to look for extension
          mimetypes: this.validatedAccept.mimetypes
            .map((mt) => mt.replace(/([-+/])/g, "\\$1")) // Escape special characters
            .map((mt) => mt.replace(/\*/g, "(?:[A-Za-z0-9\\-\\+]*)*")) // Enable wildcards
            .map((rgxstr) => new RegExp(`^${rgxstr}$`)), // Transform into regex
        };
      } else {
        // If we haven't been given any filters...
        return {
          extensions: [this.matchAnything],
          mimetypes: [this.matchAnything],
        };
      }
    },
    validatedAccept() {
      if (this.accept) {
        return {
          extensions: this.accept
            .split(",")
            .filter((type) => type.match(/^\.(?!.*\/)/)), // Get only extension filters
          mimetypes: this.accept
            .split(",")
            .filter((type) =>
              type.match(
                /^(?:(?:[A-Za-z0-9\-+]*)|\*)\/(?:(?:[A-Za-z0-9\-+.]*)|\*)$/
              )
            ), // Get only mimetype filters
        };
      } else {
        return null;
      }
    },
  },
  watch: {
    multiple(val) {
      if (!val) {
        this.files.splice(0, this.files.length - 1);
      }
    },
    hoveringContent(val) {
      // If a file is hovering
      if (val) {
        // If we have type checking and we're using mimetypes only
        if (
          this.accept &&
          this.accept.length &&
          this.validTypes.extensions.length === 0
        ) {
          let shouldDim = false;
          // For each file hovering over the box...
          for (let i = 0; i < val.length; i++) {
            if (
              // Check the type against all our mime types
              this.validTypes.mimetypes.reduce(
                (prev, regex) => prev || !!val[i].type.match(regex)
              )
            ) {
              shouldDim = true;
              break;
            }
          }
          // If we found a match, dim the box
          if (shouldDim) {
            this.dropzone.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
          }
          // If not, we can't definitively typecheck, so...
        } else {
          // Check that we have a file in there
          let shouldDim = false;
          for (let i = 0; i < val.length; i++) {
            if (val[i].kind === "file") {
              shouldDim = true;
              break;
            }
          }
          // ... and dim the box
          if (shouldDim) {
            this.dropzone.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
          }
        }
        // Otherwise...
      } else {
        // Un-dim the box
        this.dropzone.style.backgroundColor = "";
      }
    },
    hoverCounter(val) {
      if (val === 0) {
        this.hoveringContent = null;
      }
    },
  },
  methods: {
    formatBytes,
    upload() {
      const files = this.filebtn.files ?? [];
      for (let i = 0; i < files.length; i++) {
        if (!this.multiple) {
          this.files.splice(0, this.files.length);
        }
        const shouldPush =
          this.validTypes.extensions.reduce(
            (prev, regex) => prev || !!files[i].name.match(regex),
            false
          ) ||
          this.validTypes.mimetypes.reduce(
            (prev, regex) => prev || !!files[i].type.match(regex),
            false
          );
        if (shouldPush) {
          this.files.push(files[i]);
        }
      }
      this.filebtn.value = "";
    },
    dragenter(e) {
      this.hoveringContent = e.dataTransfer.items;
      this.hoverCounter++;
    },
    /** Counts leave events (fix for event rippling issues) */
    dragleave(e) {
      this.hoverCounter--;
    },
    /** Validates and keeps track of dropped content */
    drop(e) {
      e.preventDefault(); // Keep from leaving the page
      this.hoverCounter = 0; // Content can't be dragged out, so go ahead and reset the counter
      if (e.dataTransfer.items) {
        const rejected = []; // Keeps track of rejected items for reporting at the end
        for (let i = 0; i < e.dataTransfer.items.length; i++) {
          if (e.dataTransfer.items[i].kind === "file") {
            // Directories are not supported. Skip any that are found
            if (e.dataTransfer.items[i].webkitGetAsEntry) {
              const entry = e.dataTransfer.items[i].webkitGetAsEntry();
              if (entry.isDirectory) {
                rejected.push(entry.name);
                continue;
              }
            }
            const file = e.dataTransfer.items[i].getAsFile();
            if (file) {
              const shouldPush = // Check against Regex arrays from accept property
                this.validTypes.extensions.reduce(
                  (prev, regex) => prev || !!file.name.match(regex),
                  false
                ) ||
                this.validTypes.mimetypes.reduce(
                  (prev, regex) => prev || !!file.type.match(regex),
                  false
                );
              if (shouldPush) {
                if (this.multiple) {
                  // Remove duplicates
                  this.files
                    .filter((currFile) => currFile.name === file.name)
                    .forEach((fileToRemove) =>
                      this.files.splice(this.files.indexOf(fileToRemove), 1)
                    );
                } else {
                  // Remove all
                  this.files.splice(0, this.files.length);
                }
                this.files.push(file);
              } else {
                rejected.push(file); // Keep track of rejected files
                continue;
              }
            } else {
              continue;
            }
          }
        }
        // Emit rejected files
        if (rejected.length) {
          this.$emit("rejectedFiles", rejected);
        }
      }
    },
    /** Removes attachment per user's request */
    remove(file) {
      const arr = this.files;
      arr.splice(arr.indexOf(file), 1);
      this.$emit("update", null);
    },
    isFileInvalid(file) {
      return this.invalidFiles.find((x) => x === file);
    },
    // alertColor is used because there is no built in grey type. so when there is an error, we use the error type, and when there is no error we use the color definition
    alertColor(file) {
      return this.isFileInvalid(file) ? null : "grey";
    },
    alertType(file) {
      return this.isFileInvalid(file) ? "error" : null;
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 1.5em;
  font-weight: 400;
  font-family: Roboto, sans-serif;
  color: hsla(0, 0%, 100%, 0.7);
}
p {
  margin: 0;
}
.dropzone {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s;
  margin-bottom: 15px;
  border: 2px solid #ebeef1;
  border-radius: 4px;
  height: 160px;
  position: relative;
  &-btn {
    position: absolute;
    top: -25px;
  }
}
div.input-container {
  width: 100%;
}
.v-input {
  ::v-deep div.v-input__control {
    div.v-input__slot {
      margin-top: 4px;
      margin-bottom: 0 !important;
    }
    div.v-messages {
      display: none;
    }
  }
}
input.filebtn {
  display: none;
}
</style>
