import { Router } from 'express'
import { convertData } from './conversion.controller.js'

const api = Router()

api.post(
    '/',
    convertData
)

export default api