defmodule Api.Repo.Migrations.CreateSlides do
  use Ecto.Migration

  def change do
    create table(:slides) do
      add :description, :string
      add :order, :string
      add :video, :boolean, default: false, null: false
      add :question, :boolean, default: false, null: false
      add :answer1, :string
      add :answer2, :string
      add :answer3, :string
      add :answer4, :string
      add :correct_ans, :integer
      add :course_id, references(:courses, on_delete: :delete_all)
      timestamps()
    end
    create index(:slides, [:course_id])
  end
end
