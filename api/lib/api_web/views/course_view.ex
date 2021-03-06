defmodule ApiWeb.CourseView do
  use ApiWeb, :view
  alias ApiWeb.CourseView

  def render("index.json", %{courses: courses}) do
    %{data: render_many(courses, CourseView, "course.json")}
  end

  def render("show.json", %{course: course}) do
    %{data: render_one(course, CourseView, "course.json")}
  end

  def render("course.json", %{course: course}) do
    %{
      id: course.id,
      name: course.name,
      description: course.description,
      active: course.active
    }
  end
end
