defmodule ApiWeb.UserTrackControllerTest do
  use ApiWeb.ConnCase

  import Api.ProgressFixtures

  alias Api.Progress.UserTrack

  @create_attrs %{
    course_progress: 42,
    date_finish: ~N[2022-04-07 20:22:00],
    date_init: ~N[2022-04-07 20:22:00]
  }
  @update_attrs %{
    course_progress: 43,
    date_finish: ~N[2022-04-08 20:22:00],
    date_init: ~N[2022-04-08 20:22:00]
  }
  @invalid_attrs %{course_progress: nil, date_finish: nil, date_init: nil}

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all userstrack", %{conn: conn} do
      conn = get(conn, Routes.user_track_path(conn, :index))
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create user_track" do
    test "renders user_track when data is valid", %{conn: conn} do
      conn = post(conn, Routes.user_track_path(conn, :create), user_track: @create_attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.user_track_path(conn, :show, id))

      assert %{
               "id" => ^id,
               "course_progress" => 42,
               "date_finish" => "2022-04-07T20:22:00",
               "date_init" => "2022-04-07T20:22:00"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, Routes.user_track_path(conn, :create), user_track: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update user_track" do
    setup [:create_user_track]

    test "renders user_track when data is valid", %{conn: conn, user_track: %UserTrack{id: id} = user_track} do
      conn = put(conn, Routes.user_track_path(conn, :update, user_track), user_track: @update_attrs)
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.user_track_path(conn, :show, id))

      assert %{
               "id" => ^id,
               "course_progress" => 43,
               "date_finish" => "2022-04-08T20:22:00",
               "date_init" => "2022-04-08T20:22:00"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn, user_track: user_track} do
      conn = put(conn, Routes.user_track_path(conn, :update, user_track), user_track: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete user_track" do
    setup [:create_user_track]

    test "deletes chosen user_track", %{conn: conn, user_track: user_track} do
      conn = delete(conn, Routes.user_track_path(conn, :delete, user_track))
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, Routes.user_track_path(conn, :show, user_track))
      end
    end
  end

  defp create_user_track(_) do
    user_track = user_track_fixture()
    %{user_track: user_track}
  end
end
