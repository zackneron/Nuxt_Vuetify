<template>
  <div class="inner-margin-1">
    <div class="white elevation-2 pa-7 rounded mb-7 mh-40">
      <v-card elevation="0">
        <v-card-text class="pa-0">
          <v-container>
            <v-row>
              <v-col cols="12" class="pa-0">
                <v-card-title
                  class="text-h5 pa-0 mb-7 black--text font-weight-light"
                >
                  Upload Supporting Documents
                </v-card-title>
                <span class="mb-7 d-block font-weight-bold black--text">
                  Supporting documents that must be provided when a withdrawal
                  claim is submitted:
                </span>

                <p>
                  For all exits effective from 01 March 2019 it is a legislative
                  requirement that the member must provide consent in writing
                  with regard to the payment instructions.
                </p>
                <p>
                  Should you have any form of written consent from the member,
                  please upload a scanned copy here.
                </p>
                <p>
                  Note that should you not have written consent from the member,
                  Katshi will contact the member to obtain written consent,
                  using the contact details provided above.
                </p>
                <p>
                  Note that should these contact details be incorrect, this
                  could result in a delay in processing the payment.
                </p>
                <v-btn
                  text
                  color="primary"
                  class="text-caption mb-4"
                  href="form.pdf"
                  download
                >
                  <v-icon>mdi-download</v-icon> Download Blank Consent Form
                </v-btn>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12">
                <div
                  :class="{
                    'form-group--error': $v.item.files.$error,
                  }"
                  class="form-group py-4"
                >
                  <FileDropZone
                    :files="item.files"
                    :accept="allowedFileTypes.join(',')"
                    :invalid-files="item.invalidFiles"
                  ></FileDropZone>
                </div>
                <div v-if="hasErrors" class="error--text">
                  There are {{ errors.length }} errors in this statement batch,
                  please view the log to see the errors or upload a new file and
                  try again.
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import FileDropZone from "@/components/core/FileDropZone";
import { ALLOWED_FILE_TYPES } from "@/helpers/files";
export default {
  components: { FileDropZone },
  data() {
    return {
      files: [],
    };
  },
  props: {
    statementTypes: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      visible: true,
      item: {
        statementType: null,
        name: null,
        files: [],
        invalidFiles: [],
      },
      allowedFileTypes: ALLOWED_FILE_TYPES,
      errors: [],
    };
  },
  computed: {
    statementTypeValidationErrors() {
      const errors = [];
      if (!this.$v.item.statementType.$dirty) {
        return errors;
      }

      !this.$v.item.statementType.required && errors.push("Field is required");

      return errors;
    },
    nameValidationErrors() {
      const errors = [];
      if (!this.$v.item.name.$dirty) {
        return errors;
      }

      !this.$v.item.name.required && errors.push("Field is required");

      return errors;
    },
    fileValidationErrors() {
      const errors = [];
      if (!this.$v.item.files.$dirty) {
        return errors;
      }

      !this.$v.item.files.required && errors.push("Field is required");

      return errors;
    },
    hasErrors() {
      return this.errors?.length > 0;
    },
  },
  watch: {
    "item.files"() {
      this.resetErrors();
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
    async create() {
      this.$v.item.$touch();
      if (!this.$v.item.$invalid) {
        const formData = new FormData();
        formData.append("statementBatchType", this.item.statementType.value);
        formData.append("name", this.item.name);
        formData.append("schemaMasterFile", this.item.files[0]);
        try {
          const response = await this.$axios.$post(
            "/api/statement-batches",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          this.$emit("created", response);
        } catch ({ response }) {
          if (response && response.data) {
            this.errors = response.data.map(({ lineNumber, errors }) => {
              return {
                lineNumber,
                errors: errors
                  .map((x) => x.error)
                  .reduce((a, b) => a + b + "; ", ""),
              };
            });
            this.item.invalidFiles = [this.item.files[0]];
          }
        }
      }
    },
    showErrors() {
      this.$emit("error", this.errors);
    },
    resetErrors() {
      this.errors = [];
    },
  },
  validations: {
    item: {
      statementType: {
        required,
      },
      name: {
        required,
      },
      files: {
        required,
      },
    },
  },
};
</script>

<style lang="scss"></style>
