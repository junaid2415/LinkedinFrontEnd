export class AppError{
  constructor(  public orginalError?: any) {
    alert(orginalError?.value);
    console.log(orginalError);
  }
}
