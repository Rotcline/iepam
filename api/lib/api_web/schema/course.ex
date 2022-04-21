defmodule ApiWeb.Schema.Subject do
  use Absinthe.Schema.Notation

  alias ApiWeb.Resolvers

  object :course do
    field :id, :id
    field :name, :string
    field :description, :string
    field :active, :boolean
  end

  object :get_courses do
    field :courses, list_of(:course) do
      resolve(&Resolvers.Subject.list_courses/2)
    end
  end

  object :get_course do
    field :course, :course do
      arg(:id, non_null(:id))
      resolve(&Resolvers.Subject.get_course/2)
    end
  end

  object :create_course do
    field :create_course, :course do
      arg :name, non_null(:string)
      arg :description, non_null(:string)
      arg :active, non_null(:boolean)
      resolve(&Resolvers.Subject.create_course/2)
    end
  end

  object :update_course do
    field :update_course, :course do
      arg(:id, non_null(:id))
      arg(:name, :string)
      arg(:description, :string)
      arg(:active, :boolean)
      resolve(&Resolvers.Subject.update_course/2)
    end
  end

  object :delete_course do
    field :delete_course, :course do
      arg(:id, non_null(:id))
      resolve(&Resolvers.Subject.delete_course/2)
    end
  end
end
