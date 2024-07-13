import { defineField } from "sanity"

const roomTypes = [
  {title: "Basic", vlaue: "basic"},
  {title: "Luxury", vlaue: "luxury"},
  {title: "Suite", vlaue: "suite"}
]

const hotelRoom = {
  name: "hotelRoom",
  title: "Hotel Room",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: Rule => Rule.required().max(50).error("Maximum 50 characters")
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "name"
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: Rule => Rule.required().min(100).error("Minimum 100 characters")
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: Rule => Rule.required().min(100).error("Minimum 100 USD")
    }),
    defineField({
      name: "discount",
      title: "Discount",
      type: "number",
      initialValue: 0,
      validation: Rule => Rule.required().min(0)
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "url",
              type: "url",
              title: "URL"
            },
            {
              name: "file",
              type: "file",
              title: "File"
            },
          ]
        }
      ],
      validation: Rule => Rule.required().min(3).error("Minimum of 3 images required")
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "object",
      fields: [
        {
          name: "url",
          type: "url",
          title: "URL"
        },
        {
          name: "file",
          type: "file",
          title: "File"
        }
      ],
      validation: Rule => Rule.required().error("Cover Image is required")
    }),
    defineField({
      name: "type",
      title: "Room Type",
      type: "string",
      options: {
        list: roomTypes,
      },
      initialValue: "basic",
      validation: Rule => Rule.required()
    }),
    defineField({
      name: "specialNote",
      title: "Special Note",
      type: "text",
      initialValue: "Check-in time is 12:00 PM, checkout time is 11:59 AM. If you don't leave behind any items, please contact the reception",
      validation: Rule => Rule.required()
    }),
    defineField({
      name: "dimension",
      title: "Dimension",
      type: "string",
    }),
    defineField({
      name: "numberOfBed",
      title: "Number Of Bed",
      type: "number",
      initialValue: 1,
      validation: Rule => Rule.min(1)
    }),
    defineField({
      name: "offeredAmenities",
      title: "Offered Amenities",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "icon",
              title: "Icon",
              type: "string"
            },
            {
              name: "amenity",
              title: "Amenity",
              type: "string"
            }
          ]
        }
      ]
    }),
    defineField({
      name: "isBooked",
      title: "Is Booked",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "isFeatured",
      title: "Is Featured",
      type: "boolean",
      initialValue: false,
    }),
    // defineField({
    //   name: "reviews",
    //   title: "Reviews",
    //   type: "array",
    //   of: [
    //     {
    //       type: "review"
    //     }
    //   ]
    // }),
  ]
}

export default hotelRoom