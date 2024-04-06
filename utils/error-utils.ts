export default class ApiError extends Error {
  public hasError: boolean

  constructor(public message: string, public statusCode: number) {
    super(message)
    this.hasError = true
    this.statusCode = statusCode
  }
}
