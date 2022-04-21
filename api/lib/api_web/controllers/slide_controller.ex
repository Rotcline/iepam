defmodule ApiWeb.SlideController do
  use ApiWeb, :controller

  alias Api.Content
  alias Api.Content.Slide

  action_fallback ApiWeb.FallbackController

  def index(conn, _params) do
    slides = Content.list_slides()
    render(conn, "index.json", slides: slides)
  end

  def create(conn, %{"slide" => slide_params}) do
    with {:ok, %Slide{} = slide} <- Content.create_slide(slide_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.slide_path(conn, :show, slide))
      |> render("show.json", slide: slide)
    end
  end

  def show(conn, %{"id" => id}) do
    slide = Content.get_slide!(id)
    render(conn, "show.json", slide: slide)
  end

  def update(conn, %{"id" => id, "slide" => slide_params}) do
    slide = Content.get_slide!(id)

    with {:ok, %Slide{} = slide} <- Content.update_slide(slide, slide_params) do
      render(conn, "show.json", slide: slide)
    end
  end

  def delete(conn, %{"id" => id}) do
    slide = Content.get_slide!(id)

    with {:ok, %Slide{}} <- Content.delete_slide(slide) do
      send_resp(conn, :no_content, "")
    end
  end
end
