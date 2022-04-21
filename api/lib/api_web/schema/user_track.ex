defmodule ApiWeb.Schema.Progress do
  use Absinthe.Schema.Notation

  alias ApiWeb.Resolvers
  alias ApiWeb.Schema

  object :user_track do
    field :id, :id
    field :course_progress, :integer
    field :date_finish, :string
    field :course_id, :integer
    field :user_id, :integer
  end

  object :get_user_tracks do
    field :user_tracks, list_of(:user_track) do
      resolve(&Resolvers.Progress.list_user_tracks/2)
    end
  end

  object :get_user_track do
    field :user_track, :user_track do
      arg(:id, non_null(:id))
      resolve(&Resolvers.Progress.get_user_track/2)
    end
  end

  object :create_user_track do
    field :create_user_track, :user_track do
      arg(:course_progress, non_null(:integer))
      arg(:date_finish, :string)
      arg(:course_id, non_null(:integer))
      arg(:user_id, non_null(:integer))
      resolve(&Resolvers.Progress.create_user_track/2)
    end
  end

  object :update_user_track do
    field :update_user_track, :user_track do
      arg(:id, non_null(:id))
      arg(:course_progress, non_null(:integer))
      arg(:date_finish, :string)
      resolve(&Resolvers.Progress.update_user_track/2)
    end
  end

  object :delete_user_track do
    field :delete_user_track, :user_track do
      arg(:id, non_null(:id))
      resolve(&Resolvers.Progress.delete_user_track/2)
    end
  end

end
