import { i18n } from '@/api/system/prompt'

const epoch = async() => i18n('en').res.data.rows

export default {
  epoch
}
