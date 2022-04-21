defmodule Api.AccountsTest do
  use Api.DataCase

  alias Api.Accounts

  describe "users" do
    alias Api.Accounts.User

    import Api.AccountsFixtures

    @invalid_attrs %{academiclevel: nil, address: nil, age: nil, email: nil, laboralxp: nil, name: nil, password: nil, phone: nil}

    test "list_users/0 returns all users" do
      user = user_fixture()
      assert Accounts.list_users() == [user]
    end

    test "get_user!/1 returns the user with given id" do
      user = user_fixture()
      assert Accounts.get_user!(user.id) == user
    end

    test "create_user/1 with valid data creates a user" do
      valid_attrs = %{academiclevel: "some academiclevel", address: "some address", age: "some age", email: "some email", laboralxp: "some laboralxp", name: "some name", password: "some password", phone: "some phone"}

      assert {:ok, %User{} = user} = Accounts.create_user(valid_attrs)
      assert user.academiclevel == "some academiclevel"
      assert user.address == "some address"
      assert user.age == "some age"
      assert user.email == "some email"
      assert user.laboralxp == "some laboralxp"
      assert user.name == "some name"
      assert user.password == "some password"
      assert user.phone == "some phone"
    end

    test "create_user/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Accounts.create_user(@invalid_attrs)
    end

    test "update_user/2 with valid data updates the user" do
      user = user_fixture()
      update_attrs = %{academiclevel: "some updated academiclevel", address: "some updated address", age: "some updated age", email: "some updated email", laboralxp: "some updated laboralxp", name: "some updated name", password: "some updated password", phone: "some updated phone"}

      assert {:ok, %User{} = user} = Accounts.update_user(user, update_attrs)
      assert user.academiclevel == "some updated academiclevel"
      assert user.address == "some updated address"
      assert user.age == "some updated age"
      assert user.email == "some updated email"
      assert user.laboralxp == "some updated laboralxp"
      assert user.name == "some updated name"
      assert user.password == "some updated password"
      assert user.phone == "some updated phone"
    end

    test "update_user/2 with invalid data returns error changeset" do
      user = user_fixture()
      assert {:error, %Ecto.Changeset{}} = Accounts.update_user(user, @invalid_attrs)
      assert user == Accounts.get_user!(user.id)
    end

    test "delete_user/1 deletes the user" do
      user = user_fixture()
      assert {:ok, %User{}} = Accounts.delete_user(user)
      assert_raise Ecto.NoResultsError, fn -> Accounts.get_user!(user.id) end
    end

    test "change_user/1 returns a user changeset" do
      user = user_fixture()
      assert %Ecto.Changeset{} = Accounts.change_user(user)
    end
  end
end
