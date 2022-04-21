defmodule ApiWeb.Schema.Content do
  use Absinthe.Schema.Notation

  alias ApiWeb.Resolvers
  alias ApiWeb.Schema

  object :slide do
    field :id, :id
    field :description, :string
    field :order, :string
    field :video, :boolean
    field :question, :boolean
    field :answer1, :string
    field :answer2, :string
    field :answer3, :string
    field :answer4, :string
    field :correct_ans, :integer
    field :course_id, :integer
  end


  object :get_slides do
    field :slides, list_of(:slide) do
      resolve(&Resolvers.Content.list_slides/2)
    end
  end

  object :get_slide do
    field :slide, :slide do
      arg(:id, non_null(:id))
      resolve(&Resolvers.Content.get_slide/2)
    end
  end

  object :create_slide do
    field :create_slide, :slide do
      arg(:description, non_null(:string))
      arg(:order, non_null(:string))
      arg(:video, non_null(:boolean))
      arg(:question, non_null(:boolean))
      arg(:answer1, non_null(:string))
      arg(:answer2, non_null(:string))
      arg(:answer3, non_null(:string))
      arg(:answer4, non_null(:string))
      arg(:correct_ans, non_null(:integer))
      arg(:course_id, non_null(:integer))
      resolve(&Resolvers.Content.create_slide/2)
    end
  end

  object :update_slide do
    field :update_slide, :slide do
      arg(:id, non_null(:id))
      arg(:description, :string)
      arg(:order, :string)
      arg(:video, :boolean)
      arg(:question, :boolean)
      arg(:answer1, :string)
      arg(:answer2, :string)
      arg(:answer3, :string)
      arg(:answer4, :string)
      arg(:correct_ans, :integer)
      resolve(&Resolvers.Content.update_slide/2)
    end
  end
  @doc """
  input
  {
    name: String!
    description: String!
    slides: [Slides]
  }

  Slides {
    type: SlideType (Enum)
    text: String!
    questions: [String!]!
    answer: Int
  }
  """
  object :delete_slide do
    field :delete_slide, :slide do
      arg(:id, non_null(:id))
      resolve(&Resolvers.Content.delete_slide/2)
    end
  end

  object :get_slides_by_course_id do
    field :get_slides_by_course_id, list_of(:slide) do
      arg(:course_id, non_null(:id))
      resolve(&Resolvers.Content.list_slides_by_course_id/2)
    end
  end

end
