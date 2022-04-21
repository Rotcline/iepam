defmodule Api.SubjectTest do
  use Api.DataCase

  alias Api.Subject

  describe "courses" do
    alias Api.Subject.Course

    import Api.SubjectFixtures

    @invalid_attrs %{active: nil, description: nil, name: nil}

    test "list_courses/0 returns all courses" do
      course = course_fixture()
      assert Subject.list_courses() == [course]
    end

    test "get_course!/1 returns the course with given id" do
      course = course_fixture()
      assert Subject.get_course!(course.id) == course
    end

    test "create_course/1 with valid data creates a course" do
      valid_attrs = %{active: true, description: "some description", name: "some name"}

      assert {:ok, %Course{} = course} = Subject.create_course(valid_attrs)
      assert course.active == true
      assert course.description == "some description"
      assert course.name == "some name"
    end

    test "create_course/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Subject.create_course(@invalid_attrs)
    end

    test "update_course/2 with valid data updates the course" do
      course = course_fixture()
      update_attrs = %{active: false, description: "some updated description", name: "some updated name"}

      assert {:ok, %Course{} = course} = Subject.update_course(course, update_attrs)
      assert course.active == false
      assert course.description == "some updated description"
      assert course.name == "some updated name"
    end

    test "update_course/2 with invalid data returns error changeset" do
      course = course_fixture()
      assert {:error, %Ecto.Changeset{}} = Subject.update_course(course, @invalid_attrs)
      assert course == Subject.get_course!(course.id)
    end

    test "delete_course/1 deletes the course" do
      course = course_fixture()
      assert {:ok, %Course{}} = Subject.delete_course(course)
      assert_raise Ecto.NoResultsError, fn -> Subject.get_course!(course.id) end
    end

    test "change_course/1 returns a course changeset" do
      course = course_fixture()
      assert %Ecto.Changeset{} = Subject.change_course(course)
    end
  end
end
