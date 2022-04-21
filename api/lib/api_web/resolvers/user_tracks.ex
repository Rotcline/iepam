defmodule ApiWeb.Resolvers.Progress do

  alias Api.Progress.UserTrack
  alias Api.Progress
  alias Api.Subject
  alias Api.Subject.Course
  alias Api.Accounts.User
  alias Api.Accounts

  def list_user_tracks(_args, _context) do
    {:ok, Api.Progress.list_userstrack()}
  end

  def get_user_track(%{id: id}, _context) do
    {:ok, Api.Progress.get_user_track!(id)}
  end

  def create_user_track(%{course_id: course_id, user_id: user_id} = params, _context) do
    course = Api.Subject.get_course!(course_id)
    user = Api.Accounts.get_user!(user_id)
    case Api.Progress.create_user_track(user, course, params) do
      {:ok, %UserTrack{} = usertrack} -> {:ok, usertrack}
      {:error, changeset} -> {:error, inspect(changeset.errors)}
    end
  end

  def update_user_track(%{id: id} = params, _context) do
    case Api.Progress.get_user_track!(id) do
      nil ->
        {:error, "Product not found"}

      %UserTrack{} = usertrack ->
        case Api.Progress.update_user_track(usertrack, usertrack.user_id, usertrack.course_id, params) do
          {:ok, %UserTrack{} = usertrack} -> {:ok, usertrack}
          {:error, changeset} -> {:error, inspect(changeset.errors)}
        end
    end
  end
  @desc """

  """
  def delete_user_track(%{id: id}, _context) do
    case Api.Progress.get_user_track!(id) do
      nil -> {:error, "User not found"}
      %UserTrack{} = usertrack -> Api.Progress.delete_user_track(usertrack)
    end
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
