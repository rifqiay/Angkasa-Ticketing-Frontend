export const createFormData = (file = false, data = false) => {
    const formData = new FormData()

    if (file) formData.append('picture', file)

    if (data) for (const key in data) formData.append(key, data[key])

    return formData
}
