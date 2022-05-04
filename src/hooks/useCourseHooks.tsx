import { gql, useQuery } from "@apollo/client";

export const useCoursesHooks = () => {
    const GET_COURSES = gql`
      query {
        courses {
          id
          name
          description
          active
        }
      }
    `;
    const { loading, error, data } = useQuery(GET_COURSES);
    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;
    if (data) return data;
};

export const useGetCourseByID = (id: number) => {
  const GET_COURSE = gql`
        query course( $id: ID! ){
            course( id: $id ) {
              description
              name
            }
        }
    `;
  const { loading, error, data } = useQuery(GET_COURSE, {
    variables: { id },
  })
  if (loading) return "Loading...";
  if (error) return "Error";
  if (data) return data;

};

export const CREATE_COURSE = gql`
  mutation CREATE_COURSE($active: Boolean!, $description: String!, $name: String!){
    createCourse(active: $active, description: $description, name: $name){
      id
    }
  }
`;

export const UPDATE_COURSE = gql`
  mutation UPDATE_COURSE($active: Boolean, $description: String, $name: String, $id: ID! ){
    updateCourse(active: $active, description: $description, name: $name, id: $id){
      id
    }
  }
`;

export const DELETE_COURSE = gql`
  mutation DELETE_COURSE($id: ID! ){
    deleteCourse(id: $id){
      id
    }
  }
`;