defmodule Api.Repo.Migrations.CreateUserstrack do
  use Ecto.Migration

  def change do
    create table(:userstrack) do
      add :course_progress, :integer
      add :date_init, :naive_datetime
      add :date_finish, :naive_datetime
      add :course_id, references(:courses, on_delete: :delete_all)
      add :user_id, references(:users, on_delete: :delete_all)
      timestamps()
    end
    create index(:userstrack, [:course_id])
    create index(:userstrack, [:user_id])
  end
end
