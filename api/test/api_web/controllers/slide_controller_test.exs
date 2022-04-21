defmodule ApiWeb.SlideControllerTest do
  use ApiWeb.ConnCase

  import Api.ContentFixtures

  alias Api.Content.Slide

  @create_attrs %{
    answer1: "some answer1",
    answer2: "some answer2",
    answer3: "some answer3",
    answer4: "some answer4",
    correct_ans: 42,
    description: "some description",
    order: "some order",
    question: true,
    video: true
  }
  @update_attrs %{
    answer1: "some updated answer1",
    answer2: "some updated answer2",
    answer3: "some updated answer3",
    answer4: "some updated answer4",
    correct_ans: 43,
    description: "some updated description",
    order: "some updated order",
    question: false,
    video: false
  }
  @invalid_attrs %{answer1: nil, answer2: nil, answer3: nil, answer4: nil, correct_ans: nil, description: nil, order: nil, question: nil, video: nil}

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all slides", %{conn: conn} do
      conn = get(conn, Routes.slide_path(conn, :index))
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create slide" do
    test "renders slide when data is valid", %{conn: conn} do
      conn = post(conn, Routes.slide_path(conn, :create), slide: @create_attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.slide_path(conn, :show, id))

      assert %{
               "id" => ^id,
               "answer1" => "some answer1",
               "answer2" => "some answer2",
               "answer3" => "some answer3",
               "answer4" => "some answer4",
               "correct_ans" => 42,
               "description" => "some description",
               "order" => "some order",
               "question" => true,
               "video" => true
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, Routes.slide_path(conn, :create), slide: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update slide" do
    setup [:create_slide]

    test "renders slide when data is valid", %{conn: conn, slide: %Slide{id: id} = slide} do
      conn = put(conn, Routes.slide_path(conn, :update, slide), slide: @update_attrs)
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.slide_path(conn, :show, id))

      assert %{
               "id" => ^id,
               "answer1" => "some updated answer1",
               "answer2" => "some updated answer2",
               "answer3" => "some updated answer3",
               "answer4" => "some updated answer4",
               "correct_ans" => 43,
               "description" => "some updated description",
               "order" => "some updated order",
               "question" => false,
               "video" => false
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn, slide: slide} do
      conn = put(conn, Routes.slide_path(conn, :update, slide), slide: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete slide" do
    setup [:create_slide]

    test "deletes chosen slide", %{conn: conn, slide: slide} do
      conn = delete(conn, Routes.slide_path(conn, :delete, slide))
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, Routes.slide_path(conn, :show, slide))
      end
    end
  end

  defp create_slide(_) do
    slide = slide_fixture()
    %{slide: slide}
  end
end
