import { gql, useQuery} from "@apollo/client";


export const REGISTER = gql`
    mutation REGISTER($email: String!, $password: String!) {
        register( email: $email , password: $password)
    }
`;

export const LOGIN = gql`
    mutation LOGIN($email: String!, $password: String!) {
        login( email: $email , password: $password)
    }
`;

export const useGetUserByEmail = async (email :string) => {
    const GET_USER_BY_EMAIL = gql`
        query UserByEmail($email: String!){
            getUserByEmail( email: $email ) {
                id
                email
            }
        }
    `;
    const { loading, error, data } = useQuery(GET_USER_BY_EMAIL, {
        variables: {email},
    })
    if (data) return data;
};


