defmodule Api.Progress do
  @moduledoc """
  The Progress context.
  """

  import Ecto.Query, warn: false
  alias Api.Repo

  alias Api.Progress.UserTrack
  alias Api.Accounts.User
  alias Api.Accounts
  alias Api.Subject.Course
  alias Api.Subject

  @doc """
  Returns the list of userstrack.

  ## Examples

      iex> list_userstrack()
      [%UserTrack{}, ...]

  """
  def list_userstrack do
    Repo.all(UserTrack)
  end

  @doc """
  Gets a single user_track.

  Raises `Ecto.NoResultsError` if the User track does not exist.

  ## Examples

      iex> get_user_track!(123)
      %UserTrack{}

      iex> get_user_track!(456)
      ** (Ecto.NoResultsError)

  """
  def get_user_track!(id), do: Repo.get!(UserTrack, id)

  @doc """
  Creates a user_track.

  ## Examples

      iex> create_user_track(%{field: value})
      {:ok, %UserTrack{}}

      iex> create_user_track(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_user_track(%User{} = user, %Course{} = course, attrs \\ %{}) do
    %UserTrack{}
    |> UserTrack.changeset(attrs)
    |> Ecto.Changeset.put_assoc(:user, user)
    |> Ecto.Changeset.put_assoc(:course, course)
    |> Repo.insert()
  end

  @doc """
  Updates a user_track.

  ## Examples

      iex> update_user_track(user_track, %{field: new_value})
      {:ok, %UserTrack{}}

      iex> update_user_track(user_track, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_user_track(%UserTrack{} = user_track, user, course, attrs) do
    user_track
    |> UserTrack.changeset(attrs)
    |> Ecto.Changeset.put_change(:user_id, user)
    |> Ecto.Changeset.put_change(:course_id, course)
    |> Repo.update()
  end

  @doc """
  Deletes a user_track.

  ## Examples

      iex> delete_user_track(user_track)
      {:ok, %UserTrack{}}

      iex> delete_user_track(user_track)
      {:error, %Ecto.Changeset{}}

  """
  def delete_user_track(%UserTrack{} = user_track) do
    Repo.delete(user_track)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking user_track changes.

  ## Examples

      iex> change_user_track(user_track)
      %Ecto.Changeset{data: %UserTrack{}}

  """
  def change_user_track(%UserTrack{} = user_track, attrs \\ %{}) do
    UserTrack.changeset(user_track, attrs)
  end
end
