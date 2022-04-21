defmodule Api.AccountsFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Api.Accounts` context.
  """

  @doc """
  Generate a user.
  """
  def user_fixture(attrs \\ %{}) do
    {:ok, user} =
      attrs
      |> Enum.into(%{
        academiclevel: "some academiclevel",
        address: "some address",
        age: "some age",
        email: "some email",
        laboralxp: "some laboralxp",
        name: "some name",
        password: "some password",
        phone: "some phone"
      })
      |> Api.Accounts.create_user()

    user
  end
end
