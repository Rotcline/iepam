defmodule Api.Content do
  @moduledoc """
  The Content context.
  """

  import Ecto.Query, warn: false
  alias Api.Repo

  alias Api.Content.Slide
  alias Api.Subject.Course
  alias Api.Subject


  @doc """
  Returns the list of slides.

  ## Examples

      iex> list_slides()
      [%Slide{}, ...]

  """
  def list_slides do
    Repo.all(Slide)
  end


  def list_slides_by_course(course_id) do
    Slide
    |> course_slides_query(course_id)
    |> Repo.all()
    |> Enum.map(
      &Map.take(&1, [:id, :description, :order, :video, :question, :answer1, :answer2, :answer3, :answer4, :correct_ans ])
    )
  end

  defp course_slides_query(query, course_id) do
    from(u in query, where: u.course_id == ^course_id)
  end

  @doc """
  Gets a single slide.

  Raises `Ecto.NoResultsError` if the Slide does not exist.

  ## Examples

      iex> get_slide!(123)
      %Slide{}

      iex> get_slide!(456)
      ** (Ecto.NoResultsError)

  """
  def get_slide!(id), do: Repo.get!(Slide, id)



  @doc """
  Creates a slide.

  ## Examples

      iex> create_slide(%{field: value})
      {:ok, %Slide{}}

      iex> create_slide(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_slide(%Course{} = course, attrs \\ %{}) do
    %Slide{}
    |> Slide.changeset(attrs)
    |> Ecto.Changeset.put_assoc(:course, course)
    |> Repo.insert()
  end

  @doc """
  Updates a slide.

  ## Examples

      iex> update_slide(slide, %{field: new_value})
      {:ok, %Slide{}}

      iex> update_slide(slide, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_slide(%Slide{} = slide, course, attrs) do
    slide
    |> Slide.changeset(attrs)
    |> Ecto.Changeset.put_change(:course_id, course)
    |> Repo.update()
  end

  @doc """
  Deletes a slide.

  ## Examples

      iex> delete_slide(slide)
      {:ok, %Slide{}}

      iex> delete_slide(slide)
      {:error, %Ecto.Changeset{}}

  """
  def delete_slide(%Slide{} = slide) do
    Repo.delete(slide)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking slide changes.

  ## Examples

      iex> change_slide(slide)
      %Ecto.Changeset{data: %Slide{}}

  """
  def change_slide(%Slide{} = slide, attrs \\ %{}) do
    Slide.changeset(slide, attrs)
  end
end
