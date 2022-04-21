defmodule ApiWeb.CourseController do
  use ApiWeb, :controller

  alias Api.Subject
  alias Api.Subject.Course

  action_fallback ApiWeb.FallbackController

  def index(conn, _params) do
    courses = Subject.list_courses()
    render(conn, "index.json", courses: courses)
  end

  def create(conn, %{"course" => course_params}) do
    with {:ok, %Course{} = course} <- Subject.create_course(course_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.course_path(conn, :show, course))
      |> render("show.json", course: course)
    end
  end

  def show(conn, %{"id" => id}) do
    course = Subject.get_course!(id)
    render(conn, "show.json", course: course)
  end

  def update(conn, %{"id" => id, "course" => course_params}) do
    course = Subject.get_course!(id)

    with {:ok, %Course{} = course} <- Subject.update_course(course, course_params) do
      render(conn, "show.json", course: course)
    end
  end

  def delete(conn, %{"id" => id}) do
    course = Subject.get_course!(id)

    with {:ok, %Course{}} <- Subject.delete_course(course) do
      send_resp(conn, :no_content, "")
    end
  end
end
