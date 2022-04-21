defmodule Api.SubjectFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Api.Subject` context.
  """

  @doc """
  Generate a course.
  """
  def course_fixture(attrs \\ %{}) do
    {:ok, course} =
      attrs
      |> Enum.into(%{
        active: true,
        description: "some description",
        name: "some name"
      })
      |> Api.Subject.create_course()

    course
  end
end
