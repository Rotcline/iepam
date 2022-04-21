defmodule ApiWeb.Resolvers.Content do

  alias Api.Content.Slide
  alias Api.Content
  alias Api.Subject
  alias Api.Subject.Course

  def list_slides(_args, _context) do
    {:ok, Api.Content.list_slides()}
  end

  def get_slide(%{id: id}, _context) do
    {:ok, Api.Content.get_slide!(id)}
  end

  def create_slide(%{course_id: course_id} = params, _context) do
    course = Api.Subject.get_course!(course_id)
    case Api.Content.create_slide(course, params) do
      {:ok, %Slide{} = slide} -> {:ok, slide}
      {:error, changeset} -> {:error, inspect(changeset.errors)}
    end
  end

  def update_slide(%{id: id} = params, _context) do
    case Api.Content.get_slide!(id) do
      nil ->
        {:error, "Product not found"}

      %Slide{} = slide ->
        case Api.Content.update_slide(slide, slide.course_id, params) do
          {:ok, %Slide{} = slide} -> {:ok, slide}
          {:error, changeset} -> {:error, inspect(changeset.errors)}
        end
    end
  end

  def delete_slide(%{id: id}, _context) do
    case Api.Content.get_slide!(id) do
      nil -> {:error, "User not found"}
      %Slide{} = slide -> Api.Content.delete_slide(slide)
    end
  end

  def list_slides_by_course_id(%{course_id: course_id}, _context) do
    {:ok, Api.Content.list_slides_by_course(course_id)}
  end

  @desc """
  def create_slide(%{description: description, order: order, video: video,
                     question: question, answer1: answer1, answer2: answer2,
                     answer3: answer3, answer4: answer4, correct_ans: correct_ans,
                     course_id: course_id}, _context) do
    course = Api.Subject.get_course!(course_id)
    case Api.Content.create_slide(course, %{description: description, order: order, video: video,
                     question: question, answer1: answer1, answer2: answer2,
                     answer3: answer3, answer4: answer4, correct_ans: correct_ans}) do
      {:ok, %Slide{} = slide} -> {:ok, slide}
      {:error, changeset} -> {:error, inspect(changeset.errors)}
    end
  end
"""
end
