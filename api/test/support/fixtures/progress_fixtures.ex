defmodule Api.ProgressFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Api.Progress` context.
  """

  @doc """
  Generate a user_track.
  """
  def user_track_fixture(attrs \\ %{}) do
    {:ok, user_track} =
      attrs
      |> Enum.into(%{
        course_progress: 42,
        date_finish: ~N[2022-04-07 20:22:00],
        date_init: ~N[2022-04-07 20:22:00]
      })
      |> Api.Progress.create_user_track()

    user_track
  end
end
