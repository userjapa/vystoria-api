const EnumHelper = {
  conditions: {
    ALL: [0, 1, 2, 3],

    NEW: { value: 0, desc: 'new' },
    GOOD: { value: 1, desc: 'good' },
    REGULAR: { value: 2, desc: 'regular' },
    BAD: { value: 3, desc: 'bad' }
  },
  upload: {
    types: {
      image: { value: 'image' },
      video: { value: 'video' }
    }
  }
}

export default EnumHelper
