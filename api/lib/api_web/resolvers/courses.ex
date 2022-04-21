defmodule ApiWeb.Resolvers.Subject do

  alias Api.Subject.Course
  alias Api.Subject

  def list_courses(_args, _context) do
    {:ok, Api.Subject.list_courses()}
  end

  def get_course(%{id: id}, _context) do
    {:ok, Api.Subject.get_course!(id)}
  end

  def create_course(args, _context) do
    case Api.Subject.create_course(args) do
      {:ok, %Course{} = course} -> {:ok, course}
      {:error, changeset} -> {:error, inspect(changeset.errors)}
    end
  end

  def update_course(%{id: id} = params, _context) do
    case Api.Subject.get_course!(id) do
      nil ->
        {:error, "Product not found"}

      %Course{} = course ->
        case Api.Subject.update_course(course, params) do
          {:ok, %Course{} = course} -> {:ok, course}
          {:error, changeset} -> {:error, inspect(changeset.errors)}
        end
    end
  end


  def delete_course(%{id: id}, _context) do
    case Api.Subject.get_course!(id) do
      nil -> {:error, "Course not found"}
      %Course{} = course -> Api.Subject.delete_course(course)
    end
  end

end
