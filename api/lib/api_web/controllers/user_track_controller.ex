defmodule ApiWeb.UserTrackController do
  use ApiWeb, :controller

  alias Api.Progress
  alias Api.Progress.UserTrack

  action_fallback ApiWeb.FallbackController

  def index(conn, _params) do
    userstrack = Progress.list_userstrack()
    render(conn, "index.json", userstrack: userstrack)
  end

  def create(conn, %{"user_track" => user_track_params}) do
    with {:ok, %UserTrack{} = user_track} <- Progress.create_user_track(user_track_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.user_track_path(conn, :show, user_track))
      |> render("show.json", user_track: user_track)
    end
  end

  def show(conn, %{"id" => id}) do
    user_track = Progress.get_user_track!(id)
    render(conn, "show.json", user_track: user_track)
  end

  def update(conn, %{"id" => id, "user_track" => user_track_params}) do
    user_track = Progress.get_user_track!(id)

    with {:ok, %UserTrack{} = user_track} <- Progress.update_user_track(user_track, user_track_params) do
      render(conn, "show.json", user_track: user_track)
    end
  end

  def delete(conn, %{"id" => id}) do
    user_track = Progress.get_user_track!(id)

    with {:ok, %UserTrack{}} <- Progress.delete_user_track(user_track) do
      send_resp(conn, :no_content, "")
    end
  end
end
