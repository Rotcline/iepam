defmodule ApiWeb.UserTrackView do
  use ApiWeb, :view
  alias ApiWeb.UserTrackView

  def render("index.json", %{userstrack: userstrack}) do
    %{data: render_many(userstrack, UserTrackView, "user_track.json")}
  end

  def render("show.json", %{user_track: user_track}) do
    %{data: render_one(user_track, UserTrackView, "user_track.json")}
  end

  def render("user_track.json", %{user_track: user_track}) do
    %{
      id: user_track.id,
      course_progress: user_track.course_progress,
      date_init: user_track.date_init,
      date_finish: user_track.date_finish
    }
  end
end
