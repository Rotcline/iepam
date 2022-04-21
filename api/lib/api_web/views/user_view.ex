defmodule ApiWeb.UserView do
  use ApiWeb, :view
  alias ApiWeb.UserView

  def render("index.json", %{users: users}) do
    %{data: render_many(users, UserView, "user.json")}
  end

  def render("show.json", %{user: user}) do
    %{data: render_one(user, UserView, "user.json")}
  end

  def render("user.json", %{user: user}) do
    %{
      id: user.id,
      email: user.email,
      password: user.password,
      name: user.name,
      phone: user.phone,
      address: user.address,
      age: user.age,
      academiclevel: user.academiclevel,
      laboralxp: user.laboralxp
    }
  end
end
