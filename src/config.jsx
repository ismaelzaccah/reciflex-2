const company = {
  companyName: process.env.REACT_APP_COMPANY_NAME,
  cnpj: process.env.REACT_APP_APP_CNPJ,

  contact: {
    1: process.env.REACT_APP_CONTACT_1,
    2: process.env.REACT_APP_CONTACT_2,
  },

  adress: {
    street: process.env.REACT_APP_STREET,
    number: process.env.REACT_APP_NUMBER,
    complement: process.env.REACT_APP_COMPLEMENT,
    district: process.env.REACT_APP_DISTRICT,
    city: process.env.REACT_APP_CITY,
    acronym: process.env.REACT_APP_STATE_ACRONYM,
  },

  signature: {
    1: process.env.REACT_APP_SIGNATURE_1_OWNER,
    2: process.env.REACT_APP_SIGNATURE_2_OWNER,
    3: process.env.REACT_APP_SIGNATURE_3_OWNER,
    4: process.env.REACT_APP_SIGNATURE_4_OWNER,
  },
  appVersion: 2.1
}
export default company;