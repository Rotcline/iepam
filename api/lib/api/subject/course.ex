defmodule Api.Subject.Course do
  use Ecto.Schema
  import Ecto.Changeset

  schema "courses" do
    field :active, :boolean, default: false
    field :description, :string
    field :name, :string
    has_many :userstrack, Api.Progress.UserTrack, on_delete: :delete_all
    has_many :slides, Api.Content.Slide, on_delete: :delete_all
    timestamps()
  end

  @doc false
  def changeset(course, attrs) do
    course
    |> cast(attrs, [:name, :description, :active])
    |> validate_required([:name, :description, :active])
  end
end
