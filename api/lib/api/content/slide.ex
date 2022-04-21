defmodule Api.Content.Slide do
  use Ecto.Schema
  import Ecto.Changeset

  schema "slides" do
    field :answer1, :string
    field :answer2, :string
    field :answer3, :string
    field :answer4, :string
    field :correct_ans, :integer
    field :description, :string
    field :order, :string
    field :question, :boolean, default: false
    field :video, :boolean, default: false
    belongs_to :course, Api.Subject.Course, foreign_key: :course_id

    timestamps()
  end

  @doc false
  def changeset(slide, attrs) do
    slide
    |> cast(attrs, [:description, :order, :video, :question, :answer1, :answer2, :answer3, :answer4, :correct_ans])
    |> validate_required([:description, :order, :video, :question, :answer1, :answer2, :answer3, :answer4, :correct_ans])
  end
end
