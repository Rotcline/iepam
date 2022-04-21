import { gql, useQuery } from "@apollo/client";

export const useFetchSlides = () => {
    const GET_SLIDES = gql`
      query slides {
        slides {
          id
          description
          order
          video
          question
          answer1
          answer2
          answer3
          answer4
          correct_ans


        }
      }
    `;
    const { loading, error, data } = useQuery(GET_SLIDES);
    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;
    if (data) return data;
};

export const useFetchSlidesByCourse = (courseId :number) => {
    const GET_SLIDES_BY_COURSE = gql`
      query getSlidesByCourseId( $courseId: ID! ){
        getSlidesByCourseId(courseId: $courseId){
          id
          description
          order
          video
          question
          answer1
          answer2
          answer3
          answer4
          correctAns
        }
      }
    `;
    const { loading, error, data } = useQuery(GET_SLIDES_BY_COURSE, {
        variables: {courseId},
    })
    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;
    if (data) return data;
};



