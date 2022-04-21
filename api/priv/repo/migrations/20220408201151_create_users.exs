defmodule Api.Repo.Migrations.CreateUsers do
  use Ecto.Migration

  def change do
    create table(:users) do
      add :email, :string
      add :password, :string
      add :name, :string
      add :phone, :string
      add :address, :string
      add :age, :string
      add :academiclevel, :string
      add :laboralxp, :string

      timestamps()
    end
  end
end
