const BASE_PATH = "https://simple-contact-crud.herokuapp.com"
const CONTACT_PATH = "/contact"
const CONTACT_BY_ID_PATH = "/{contactId}"
const CONTACT_URL = `${BASE_PATH}${CONTACT_PATH}`
const CONTACT_BY_ID_URL = `${BASE_PATH}${CONTACT_PATH}${CONTACT_BY_ID_PATH}`


const URL = {
  CONTACT_URL: CONTACT_URL, // base URL
  CONTACT_BY_ID_URL: CONTACT_BY_ID_URL,
}

export default { 
	URL
}