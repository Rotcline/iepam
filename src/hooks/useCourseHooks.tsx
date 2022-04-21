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

