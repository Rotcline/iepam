defmodule Api.ProgressTest do
  use Api.DataCase

  alias Api.Progress

  describe "userstrack" do
    alias Api.Progress.UserTrack

    import Api.ProgressFixtures

    @invalid_attrs %{course_progress: nil, date_finish: nil, date_init: nil}

    test "list_userstrack/0 returns all userstrack" do
      user_track = user_track_fixture()
      assert Progress.list_userstrack() == [user_track]
    end

    test "get_user_track!/1 returns the user_track with given id" do
      user_track = user_track_fixture()
      assert Progress.get_user_track!(user_track.id) == user_track
    end

    test "create_user_track/1 with valid data creates a user_track" do
      valid_attrs = %{course_progress: 42, date_finish: ~N[2022-04-07 20:22:00], date_init: ~N[2022-04-07 20:22:00]}

      assert {:ok, %UserTrack{} = user_track} = Progress.create_user_track(valid_attrs)
      assert user_track.course_progress == 42
      assert user_track.date_finish == ~N[2022-04-07 20:22:00]
      assert user_track.date_init == ~N[2022-04-07 20:22:00]
    end

    test "create_user_track/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Progress.create_user_track(@invalid_attrs)
    end

    test "update_user_track/2 with valid data updates the user_track" do
      user_track = user_track_fixture()
      update_attrs = %{course_progress: 43, date_finish: ~N[2022-04-08 20:22:00], date_init: ~N[2022-04-08 20:22:00]}

      assert {:ok, %UserTrack{} = user_track} = Progress.update_user_track(user_track, update_attrs)
      assert user_track.course_progress == 43
      assert user_track.date_finish == ~N[2022-04-08 20:22:00]
      assert user_track.date_init == ~N[2022-04-08 20:22:00]
    end

    test "update_user_track/2 with invalid data returns error changeset" do
      user_track = user_track_fixture()
      assert {:error, %Ecto.Changeset{}} = Progress.update_user_track(user_track, @invalid_attrs)
      assert user_track == Progress.get_user_track!(user_track.id)
    end

    test "delete_user_track/1 deletes the user_track" do
      user_track = user_track_fixture()
      assert {:ok, %UserTrack{}} = Progress.delete_user_track(user_track)
      assert_raise Ecto.NoResultsError, fn -> Progress.get_user_track!(user_track.id) end
    end

    test "change_user_track/1 returns a user_track changeset" do
      user_track = user_track_fixture()
      assert %Ecto.Changeset{} = Progress.change_user_track(user_track)
    end
  end
end
