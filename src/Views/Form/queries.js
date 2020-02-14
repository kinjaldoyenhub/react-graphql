import { gql } from "apollo-boost";

export const ADD_USER = gql`
  mutation createUser($name: String, $email: String, $phoneNumber: String, $address: String ,$zipCode: String , $fileName: String) {
    createUser(data:{
      name: $name, email: $email, phoneNumber: $phoneNumber,zipCode: $address,address: $zipCode,fileName: $fileName
    }){id}
  }
`;
