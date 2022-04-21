defmodule Api.Repo.Migrations.CreateCourses do
  use Ecto.Migration

  def change do
    create table(:courses) do
      add :name, :string
      add :description, :string
      add :active, :boolean, default: false, null: false

      timestamps()
    end
  end
end
