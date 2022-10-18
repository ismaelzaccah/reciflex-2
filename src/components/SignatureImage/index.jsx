import signature1 from '../../assets/signature1.jpg'
import signature2 from '../../assets/signature2.jpg'
import signature3 from '../../assets/signature3.jpg'
import signature4 from '../../assets/signature4.jpg'

const SignatureImage = (n)=>{
  const signature = [null, signature1, signature2, signature3, signature4]
  return signature[n];
}
export default SignatureImage;