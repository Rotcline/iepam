defmodule Api.Accounts.User do
  use Ecto.Schema
  import Ecto.Changeset

  schema "users" do
    field :academiclevel, :string
    field :address, :string
    field :age, :string
    field :email, :string
    field :laboralxp, :string
    field :name, :string
    field :password, :string
    field :phone, :string
    field :role, :string
    has_many :userstrack, Api.Progress.UserTrack, on_delete: :delete_all

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:email, :password, :name, :phone, :address, :age, :academiclevel, :laboralxp, :role])
    |> validate_required([:email, :password])
  end
end
