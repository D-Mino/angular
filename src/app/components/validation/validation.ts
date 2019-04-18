import { FormlyFieldConfig } from "@ngx-formly/core";

const regex = (reg, message) => {
  return {
    expression: c => {
      if (reg.test(c.value)) {
        return true;
      }

      if (c.value) {
        const replace = c.value.replace(/\s/g, "");

        if (reg.test(replace)) {
          c.setValue(replace);
          return true;
        }
      }

      return false;
    },
    message: (error, field: FormlyFieldConfig) =>
      `"${field.formControl.value}" is not a valid ${message}`
  };
};

const requiredMessage = (message) => {
  return {
    expression: c => {
      if (c.value) {
        return true;
      }

      return false;
    },
    message: (error, field: FormlyFieldConfig) =>
      'vui long dien vao ' + message
  };
};

const required = (type) => {
  return type ? "vui long nhap" : "Choose an option from above!";
};

const date = reg => {
  return {
    expression: c => {
      if (
        c.value !== null &&
        c.value !== undefined &&
        c.value._f !== undefined
      ) {
        return reg.test(c.value._i);
      } else {
        return true;
      }
    },
    message: (error, field: FormlyFieldConfig) => {
      return `"${field.formControl.value._i}" is not a valid date`;
    }
  };
};

export const validation = {
  requiredCustom: (message) => {
    return requiredMessage(message);
  },
  email: regex(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,10}))$/,
    "email"
  ),
  decimal: regex(/^\d{1,}\.\d{2}$/, "number"),
  phone: regex(/^0([1-6][0-9]{8,10}|7[0-9]{9})$/, "phone number"),
  postCode: regex(
    /^[a-zA-Z]{1,2}([0-9]{1,2}|[0-9][a-zA-Z])\s*[0-9][a-zA-Z]{2}$/,
    "post code"
  ),
  date: regex(/^(\d{2}\/\d{2}\/\d{4})$/, "date"),
  time: regex(/^\d{2}:\d{2}$/, "time"),
  ni: regex(/^[A-z]{2}\s?[\d]{2}\s?[\d]{2}\s?[\d]{2}\s?[A-z]{1}$/, "NI number"),
  siaBadge: regex(/^\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/, "badge number"),
  drivingLicence: regex(
    /^[A-Z0-9]{5}\d[0156]\d([0][1-9]|[12]\d|3[01])\d[A-Z0-9]{3}[A-Z]{2}$/,
    "UK driving licence"
  ),
  sortCode: regex(/^(\d{2})\s?(\d{2})\s?(\d{2})$/, "Sort Code"),
  accountNumber: regex(/^\d{8}$/, "Account Number")
};
