defmodule Api.Repo.Migrations.UpdateSlidesTable do
  use Ecto.Migration

  def change do
    alter table(:slides) do
       remove :order
       add :order, :integer
    end
  end
end
