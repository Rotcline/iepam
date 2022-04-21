defmodule Api.Progress.UserTrack do
  use Ecto.Schema
  import Ecto.Changeset

  schema "userstrack" do
    field :course_progress, :integer
    field :date_finish, :naive_datetime
    field :date_init, :naive_datetime
    belongs_to :user, Api.Accounts.User, foreign_key: :user_id
    belongs_to :course, Api.Subject.Course, foreign_key: :course_id

    timestamps()
  end

  @doc false
  def changeset(user_track, attrs) do
    user_track
    |> cast(attrs, [:course_progress, :date_init, :date_finish])
    |> validate_required([:course_progress])
  end
end
