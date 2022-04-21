import { gql, useQuery} from "@apollo/client";

export const useGetUser = (id :number) => {
    const GET_USER = gql`
        query user( $id: ID! ){
            user( id: $id ) {
                id
                email
                role
                name
                phone
                address
                age
                academiclevel
                laboralxp
            }
        }
    `;
    const { loading, error, data } = useQuery(GET_USER, {
        variables: {id},
    })
    if (loading) return "Loading...";
    if (error) return "Error";
    if (data) return data;

};

export const useGetUsers = () => {
    const GET_USERS = gql`
        query users{
            users{
                id
                email
                role
                name
                phone
                address
                age
                academiclevel
                laboralxp
            }
        }
    `;
    const { loading, error, data } = useQuery(GET_USERS)
    if (loading) return "Loading...";
    if (error) return "Error";
    if (data) return data;

};

export const UPDATE = gql`
    mutation ($academiclevel: String, $address: String, $age: String,
                        $id: ID!, $laboralxp: String, $name: String, $phone: String, $role: String) {
        updateUser(academiclevel: $academiclevel, address: $address, age: $age,
                        id: $id, laboralxp: $laboralxp, name: $name, phone: $phone, role: $role){
                            id
                        }
    }
`;