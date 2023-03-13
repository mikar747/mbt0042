radio.set_group(1)

def my_function():
    radio.send_string("dupa")

def on_button_pressed_a():
    pass
input.on_button_pressed(Button.A, on_button_pressed_a)
def on_received_string(receivedString):
    if receivedString == "dupa":
        basic.show_icon(IconNames.HEART)
radio.on_received_string(on_received_string)



def on_forever():
    pass
basic.forever(on_forever)
