defmodule ApiWeb.Schema.Accounts do
  use Absinthe.Schema.Notation

  alias ApiWeb.Resolvers

  object :user do
    field :id, :id
    field :email, :string
    field :password, :string
    field :name, :string
    field :phone, :string
    field :address, :string
    field :age, :string
    field :academiclevel, :string
    field :laboralxp, :string
    field :role, :string
  end

  object :get_users do
    field :users, list_of(:user) do
      resolve(&Resolvers.Accounts.list_users/2)
    end
  end

  object :get_user do
    field :user, :user do
      arg(:id, non_null(:id))
      resolve(&Resolvers.Accounts.get_user/2)
    end
  end

  object :get_user_by_email do
    field :get_user_by_email, :user do
      arg(:email, non_null(:string))
      resolve(&Resolvers.Accounts.get_user_by_email/2)
    end
  end

  object :create_user do
    field :create_user, :user do
      arg :email, non_null(:string)
      arg :password, non_null(:string)
      resolve(&Resolvers.Accounts.create_user/2)
    end
  end

  object :update_user do
    field :update_user, :user do
      arg(:id, non_null(:id))
      arg(:email, :string)
      arg(:password, :string)
      arg(:name, :string)
      arg(:phone, :string)
      arg(:address, :string)
      arg(:age, :string)
      arg(:academiclevel, :string)
      arg(:laboralxp, :string)
      arg(:role, :string)

      resolve(&Resolvers.Accounts.update_user/2)
    end
  end

  object :delete_user do
    field :delete_user, :user do
      arg(:id, non_null(:id))
      resolve(&Resolvers.Accounts.delete_user/2)
    end
  end

  object :login do
    field :login, :string do
      arg(:email, non_null(:string))
      arg(:password, non_null(:string))
      resolve(&Resolvers.Accounts.login/2)
    end
  end

  object :register do
    field :register, :string do
      arg(:email, non_null(:string))
      arg(:password, non_null(:string))
      resolve(&Resolvers.Accounts.register/2)
    end
  end

end
