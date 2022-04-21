defmodule ApiWeb.Schema do
  use Absinthe.Schema

  alias ApiWeb.Schema

  import_types(Schema.Subject)
  import_types(Schema.Accounts)
  import_types(Schema.Content)
  import_types(Schema.Progress)

  query do
    import_fields(:get_courses)
    import_fields(:get_course)

    import_fields(:get_users)
    import_fields(:get_user)
    import_fields(:get_user_by_email)

    import_fields(:get_slides)
    import_fields(:get_slide)
    import_fields(:get_slides_by_course_id)


    import_fields(:get_user_tracks)
    import_fields(:get_user_track)
  end

  mutation do
    import_fields(:create_course)
    import_fields(:update_course)
    import_fields(:delete_course)

    import_fields(:create_user)
    import_fields(:update_user)
    import_fields(:delete_user)
    import_fields(:login)
    import_fields(:register)


    import_fields(:create_slide)
    import_fields(:update_slide)
    import_fields(:delete_slide)

    import_fields(:create_user_track)
    import_fields(:update_user_track)
    import_fields(:delete_user_track)
  end
end
